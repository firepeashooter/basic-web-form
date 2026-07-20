import DietarySection from '../Components/DietarySection';
import SleepSliderSection from '../Components/SleepSliderSection';

interface LifestyleHabitsProps {
	onPrev: () => void;
}

function LifestyleHabits({ onPrev }: LifestyleHabitsProps) {

	return (
		<div className="flex flex-col justify-center gap-5">
			<h1 className="text-xl font-bold text-gray-800">Lifestyle & Habits</h1>

			<div className="flex flex-col gap-4">
				<SleepSliderSection />
				<DietarySection />
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
