import {last, toPairs} from "lodash"
import path from "path"

const indexModule = require(process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src"))

/**
   * @type { import("../src") }
   */
const {default: KeyCounter} = indexModule

it("should run", () => {
  const counter = new KeyCounter
  expect(counter).toBeInstanceOf(KeyCounter)
  expect(counter.size()).toBe(0)
  counter.feed("peach")
  counter.feed("peach", 4)
  expect(counter.size()).toBe(1)
  expect(counter.get("peach")).toBe(5)
  counter.feed(["lemon", "banana"], 2)
  expect(counter.size()).toBe(3)
  expect(counter.get("lemon")).toBe(2)
  expect(counter.sum()).toBe(9)
  expect(counter.toObjectSortedByValues() |> toPairs |> last).toStrictEqual(["peach", 5])
})