import { rest } from "msw";
import data from "./books.json";

export const handlers = [
  rest.get("/api/books", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data));
  }),
];
