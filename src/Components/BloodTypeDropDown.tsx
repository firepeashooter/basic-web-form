
function BloodTypeDropDown() {
	return (
		<div className="flex flex-col gap-1.5 w-full">
			<label
				htmlFor="blood-type"
				className="text-md font-semibold text-gray-700"
			>
				Blood Type
			</label>

			<select
				id="blood-type"
				defaultValue=""
				className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 invalid:text-gray-400"
			>
				{/* Disabled placeholder choice that shows by default */}
				<option value="" disabled hidden>Select type...</option>

				<option value="A+">A+ (A Positive)</option>
				<option value="A-">A- (A Negative)</option>
				<option value="B+">B+ (B Positive)</option>
				<option value="B-">B- (B Negative)</option>
				<option value="AB+">AB+ (AB Positive)</option>
				<option value="AB-">AB- (AB Negative)</option>
				<option value="O+">O+ (O Positive)</option>
				<option value="O-">O- (O Negative)</option>
			</select>
		</div>

	)
}

export default BloodTypeDropDown
