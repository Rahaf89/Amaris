const auth = require("../auth");

describe("auth", () => {
  let db;
  let middleware;
  let queryMock = jest.fn();
  beforeEach(() => {
    db = {
      query: jest.fn((...args) => queryMock(...args)),
    };
    middleware = auth(db);
  });

  it("It sends a 401 error-code when the auth header is not present", () => {
    const sendStatusMock = jest.fn();
    middleware({ headers: {} }, { sendStatus: sendStatusMock }, jest.fn());

    expect(sendStatusMock).toHaveBeenCalledWith(401);
  });

  it("It does not send a 401 error-code when the auth header is not present", () => {
    const sendStatusMock = jest.fn();
    middleware(
      { headers: { "x-auth-user": "foo" } },
      { sendStatus: sendStatusMock },
      jest.fn()
    );

    expect(sendStatusMock).not.toHaveBeenCalledWith(401);
  });

  it("Sends a 401 if the query has no results", () => {
    const sendStatusMock = jest.fn();
    let cb;
    queryMock = jest.fn((_, __, _cb) => {
      cb = _cb;
    });
    middleware(
      { headers: { "x-auth-user": "foo" } },
      { sendStatus: sendStatusMock },
      jest.fn()
    );
    cb(null, { rows: [] });

    expect(sendStatusMock).toHaveBeenCalledWith(401);
  });

  it("Sends a 401 if the query returns a row that's not an admin", () => {
    const sendStatusMock = jest.fn();
    let cb;
    queryMock = jest.fn((_, __, _cb) => {
      cb = _cb;
    });
    middleware(
      { headers: { "x-auth-user": "foo" } },
      { sendStatus: sendStatusMock },
      jest.fn()
    );
    cb(null, { rows: [{}] });

    expect(sendStatusMock).toHaveBeenCalledWith(401);
  });

  it("propagates to the next middleware if the query returns a row that's an admin", () => {
    const sendStatusMock = jest.fn();
    const nextMock = jest.fn();
    let cb;
    queryMock = jest.fn((_, __, _cb) => {
      cb = _cb;
    });
    middleware(
      { headers: { "x-auth-user": "foo" } },
      { sendStatus: sendStatusMock },
      nextMock
    );
    cb(null, { rows: [{ role: "admin" }] });

    expect(sendStatusMock).not.toHaveBeenCalled();
    expect(nextMock).toHaveBeenCalled();
  });
});
