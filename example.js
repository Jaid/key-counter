import KeyCounter from "key-counter"

const counter = new KeyCounter

counter.get("bananas") // null
counter.feed("bananas")
counter.get("bananas") // 1