import DietarySection from '../Components/DietarySection';
import MultiRadioInputField from '../Components/MultiRadioInputField';

interface LifestyleHabitsProps {
	onPrev: () => void;
}

function LifestyleHabits({ onPrev }: LifestyleHabitsProps) {

	return (
		<div className="flex flex-col justify-center gap-5">
			<h1 className="text-xl font-bold text-gray-800">Lifestyle & Habits</h1>

			<div className="flex flex-col gap-4">
				<DietarySection />
				<MultiRadioInputField
					question="How would you rate your average nights sleep quality over the last 30 days"
					groupName="sleep quality"
					buttonNames={["Poor (<5 hours)", "Fair (5-6 hours)", "Good (7-8 hours)", "Excellent (8+ hours)"]}
				/>
			</div>

			<div className="flex justify-end gap-5">

				<button
					type="button"
					className="rounded-xl bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-gray-500 active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 disabled:opacity-50 disabled:pointer-events-none"
					onClick={onPrev}
				>
					Back
				</button>

				<button
					type="submit"
					className="rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-500 active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-50 disabled:pointer-events-none"
				>
					Submit
				</button>
			</div>
		</div>
	);
}

export default LifestyleHabits
