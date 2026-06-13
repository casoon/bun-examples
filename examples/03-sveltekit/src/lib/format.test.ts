import { describe, it, expect } from 'bun:test'
import { clamp, formatBytes } from './format'

describe('formatBytes', () => {
  it('formats bytes', () => expect(formatBytes(512)).toBe('512 B'))
  it('formats kilobytes', () => expect(formatBytes(2048)).toBe('2.0 KB'))
  it('formats megabytes', () => expect(formatBytes(1_500_000)).toBe('1.4 MB'))
})

describe('clamp', () => {
  it('returns value within range', () => expect(clamp(5, 0, 10)).toBe(5))
  it('clamps to min', () => expect(clamp(-5, 0, 10)).toBe(0))
  it('clamps to max', () => expect(clamp(15, 0, 10)).toBe(10))
})
