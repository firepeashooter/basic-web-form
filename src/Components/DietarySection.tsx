import { useState } from "react";

//TODO: Make a generic version of this
function DietarySection() {
	// Define the options array
	const dietOptions = [
		{ id: 'vegetarian', label: 'Vegetarian' },
		{ id: 'vegan', label: 'Vegan' },
		{ id: 'gluten-free', label: 'Gluten-Free' },
		{ id: 'dairy-free', label: 'Dairy-Free' },
		{ id: 'keto', label: 'Keto / Low Carb' },
		{ id: 'none', label: 'No Dietary Restrictions' },
	];

	// State to track an array of selected options
	const [selectedDiets, setSelectedDiets] = useState<string[]>([]);

	const handleCheckboxChange = (id: string) => {
		setSelectedDiets((prev) => {
			// If "None" is selected, clear everything else
			if (id === 'none') {
				return prev.includes('none') ? [] : ['none'];
			}

			// If a diet is selected, remove "None" if it was checked
			const filtered = prev.filter((item) => item !== 'none');

			if (filtered.includes(id)) {
				return filtered.filter((item) => item !== id); // Uncheck
			} else {
				return [...filtered, id]; // Check
			}
		});
	};

	return (
		<fieldset className="flex flex-col gap-1.5 w-full md:col-span-2 pt-2">
			<legend className="text-md font-semibold text-gray-700">
				Dietary Preferences / Restrictions <span className="text-xs font-normal text-gray-500">(Select all that apply)</span>
			</legend>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
				{dietOptions.map((option) => {
					const isChecked = selectedDiets.includes(option.id);

					return (
						<label
							key={option.id}
							className={`flex items-center gap-3 rounded-lg border p-3 text-sm font-medium cursor-pointer select-none transition-all hover:bg-gray-50 ${isChecked
								? 'border-blue-500 bg-blue-50/30 text-blue-900'
								: 'border-gray-200 bg-white text-gray-700'
								}`}
						>
							<input
								id={`diet-${option.id}`}
								type="checkbox"
								name="dietary-prefs"
								value={option.id}
								checked={isChecked}
								onChange={() => handleCheckboxChange(option.id)}
								className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
							/>
							{option.label}
						</label>
					);
				})}
			</div>
		</fieldset>
	)
}

export default DietarySection
