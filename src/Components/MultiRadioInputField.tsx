interface MultiRadioInputFieldProps {
	question: string;
	groupName: string;
	buttonNames: string[]

}

function MultiRadioInputField({ question, groupName, buttonNames }: MultiRadioInputFieldProps) {
	return (
		<fieldset className="w-full">

			{/* Question */}
			<legend className="text-md font-semibold text-gray-700 pb-3">
				{question}
			</legend>

			<div className="flex flex-col sm:flex-row items-center gap-6">
				{buttonNames.map((buttonLabel, index) => (
					<label
						key={`${buttonLabel}-${index}`}
						className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer select-none"
					>
						<input
							type="radio"
							name={groupName}
							value={buttonLabel}
							className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
						/>
						{buttonLabel}
					</label>
				))}

			</div>
		</fieldset>
	)
}

export default MultiRadioInputField
