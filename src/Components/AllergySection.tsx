import { useState } from 'react';


function AllergySection() {
	// Track whether the "Yes" radio button is selected
	const [hasAllergies, setHasAllergies] = useState(false);

	return (
		<fieldset className="w-full">

			{/* Question */}
			<legend className="text-md font-semibold text-gray-700 pb-3">
				Do you have any known allergies?
			</legend>

			<div className="flex items-center gap-6">

				{/* YES Option */}
				<label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer select-none">
					<input
						type="radio"
						name="allergies-choice" // Shared name groups them so only one can be checked
						checked={hasAllergies === true}
						onChange={() => setHasAllergies(true)}
						className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
					/>
					Yes
				</label>

				{/* NO Option */}
				<label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer select-none">
					<input
						type="radio"
						name="allergies-choice"
						checked={hasAllergies === false}
						onChange={() => {
							setHasAllergies(false);
						}}
						className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
					/>
					No
				</label>
			</div>

			{/* 3. Conditional Text Field */}
			{hasAllergies && (
				<div className="animate-fade-in flex flex-col gap-1.5 pt-2">
					<label htmlFor="allergies-text" className="text-sm text-gray-700">
						Please list your allergies:
					</label>
					<textarea
						id="allergies-text"
						className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
					/>
				</div>
			)}

		</fieldset>
	);
}

export default AllergySection
