// index.js ts-doc

/*
Problem Statement
Write a function named findOddOccurrences that takes a list of integers 
as its input and returns a list of integers that appear an odd number of times in the input list.

Input
A list of integers, arr.

Output
A list of integers from arr that appear an odd number of times.

Constraints
The list arr can contain both positive and negative integers.
The length of arr can be between 0 and 10,000.

Function Signature
python

def findOddOccurrences(arr: List[int]) -> List[int]: 

Examples

Example 1
Input: arr = [1, 2, 3, 2, 3, 1, 3]
Output: [3]
Explanation: Here, the number 3 appears 3 times, which is odd. All other numbers appear an even number of times.

Example 2
Input: arr = [4, 4, 4, 5, 5, 5, 6, 6, 7]
Output: [4, 5, 7]
Explanation: The numbers 4 and 5 appear 3 times, and 7 appears once. 4, 5 & 7 have odd occurrences.

Notes
If no element has an odd number of occurrences, the function should return an empty list.


Map input[] -> output[]
Controlling rule: find odd occurences
1, 3, 5, etc.
func (arg: int[]) {
	const candidates
}

*/

const example = [1, 2, 3, 2, 3, 1, 3]

const findOddOccurrences = (integers) => {
	const candidates = new Set([])
	const meta = {}
	meta.output = {}

	for (let i = 0; i < integers.length; i++) {
		const element = integers[i]
		
		// if so, check if has appeared an odd number of times during this current iteration
		if (candidates.has(element)) {
			meta[element].occurrences += 1
			let occurrences = meta[element].occurrences

			if (occurrences % 2 === 0) {
				meta.output[element] = undefined
			} else {
				meta.output[element] = element
			}
			
		} else {
			candidates.add(element)
			meta[element] = { occurrences: 1 }
			meta.output[element] = element
		}
	}

	const result = Object.values(meta.output).filter(el => el)

	return result
}

const operation = findOddOccurrences(example)
console.log(JSON.stringify(operation))