/* eslint-disable */
// @ts-expect-error
import { test, expect } from 'bun:test'
import { luhn } from './luhn'

test('lunn handles numbers', () => {
  expect(luhn(378734493671000)).toBe(true)
  expect(luhn(6011111111111117)).toBe(true)
  expect(luhn(4111111111111111)).toBe(true)
  expect(luhn(4111111111111112)).toBe(false)
})

test('luhn handles strings', () => {
  expect(luhn('4222222222222')).toBe(true)
  expect(luhn('4222222222221')).toBe(false)
  expect(luhn('378282246310005')).toBe(true)
})

test('luhn skips non-digits', () => {
  expect(luhn('4111 1111 1111 1111')).toBe(true)
  expect(luhn('5111 1111 1111 1111')).toBe(false)
  expect(luhn('4012-8888-8888-1881')).toBe(true)
})