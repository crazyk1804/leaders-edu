export interface DictationState {
	questions: string[]

	addQuestion: (question: string) => void
	modQuestion: (question: string, ix: number) => void

	mode?: string
	setMode: (mode: string) => void
}