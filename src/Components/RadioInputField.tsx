
interface RadioInputFieldProps {
	legend: string,
	name: string,

}

function RadioInputField({ legend, name }: RadioInputFieldProps) {
	return (
		<fieldset className="w-full">

			{/* Question */}
			<legend className="text-md font-semibold text-gray-700 pb-3">
				{legend}
			</legend>

			<div className="flex items-center gap-6">

				{/* YES Option */}
				<label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer select-none">
					<input
						type="radio"
						name={name} // Shared name groups them so only one can be checked
						className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
					/>
					Yes
				</label>

				{/* NO Option */}
				<label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer select-none">
					<input
						type="radio"
						name={name}
						className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
					/>
					No
				</label>
			</div>
		</fieldset>
	)
}

export default RadioInputField
