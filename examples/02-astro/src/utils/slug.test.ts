import { describe, it, expect } from 'bun:test'
import { toSlug } from './slug'

describe('toSlug', () => {
  it('lowercases and hyphenates spaces', () => {
    expect(toSlug('Hello World')).toBe('hello-world')
  })

  it('removes special characters', () => {
    expect(toSlug('Über & Beyond!')).toBe('ber-beyond')
  })

  it('collapses multiple hyphens', () => {
    expect(toSlug('foo---bar')).toBe('foo-bar')
  })

  it('trims leading and trailing hyphens', () => {
    expect(toSlug('--hello--')).toBe('hello')
  })
})
