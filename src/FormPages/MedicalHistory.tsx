import AllergySection from "../Components/AllergySection"
import BloodTypeDropDown from "../Components/BloodTypeDropDown"
import RadioInputField from "../Components/RadioInputField"
import TextInput from "../Components/TextInput"

function MedicalHistory() {
	return (

		<div className="flex flex-col justify-center gap-5">

			<h1 className="text-xl font-bold mb-5">Medical History</h1>

			<div className="flex flex-col gap-8">

				<TextInput id="medicalid" label="Medical ID" />

				<BloodTypeDropDown />

				<RadioInputField
					legend="Have you undergone any surgical procedures in the last 5 years?"
					name="surgery-choice"

				/>

				<AllergySection />

			</div>

			<div className="flex justify-end">
				<button
					type="button"
					className="rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-500 active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-50 disabled:pointer-events-none"
				>
					Next
				</button>
			</div>



		</div>

	)
}

export default MedicalHistory 
