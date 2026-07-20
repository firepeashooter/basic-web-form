import { useState } from "react"

function SleepSliderSection() {

	const [sleepHours, setSleepHours] = useState(7);

	return (
		<div className="flex flex-col gap-1.5 w-full md:col-span-2">
			<label htmlFor="sleep-hours" className="text-sm font-semibold text-gray-700">
				Average Sleep per Night:{' '}
				<span className="text-blue-600 font-bold transition-all">
					{sleepHours} {sleepHours === 4 ? 'hrs or less' : sleepHours === 12 ? 'hrs or more' : 'hours'}
				</span>
			</label>
			<input
				id="sleep-hours"
				type="range"
				min="4"
				max="12"
				step="1"
				value={sleepHours} // Swapped defaultValue for controlled value
				onChange={(e) => setSleepHours(Number(e.target.value))} // Keeps state in sync
				className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 mt-2"
			/>
			<div className="flex justify-between text-xs text-gray-400 px-1">
				<span>4 hrs or less</span>
				<span>12+ hrs</span>
			</div>
		</div>
	)
}

export default SleepSliderSection
