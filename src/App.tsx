import UserInfo from "./FormPages/UserInfo"
import MedicalHistory from "./FormPages/MedicalHistory"
import LifestyleHabits from "./FormPages/LifestyleHabits"
import { useState } from "react"


function App() {

	//Track form page
	const [currentStep, setCurrentStep] = useState(1)

	// Handle submission of the form
	const handleFinalSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		console.log("Submitting Form!")
	}

	return (
		<div className="flex justify-center items-center bg-gray-200 w-full min-h-screen">
			<form
				onSubmit={handleFinalSubmit}
				className="w-3xl bg-gray-50 rounded-2xl shadow p-8"
			>

				{currentStep === 1 && (
					<UserInfo
						onNext={() => setCurrentStep(2)}
					/>
				)}

				{currentStep === 2 && (
					<MedicalHistory
						onNext={() => setCurrentStep(3)}
						onPrev={() => setCurrentStep(1)}
					/>
				)}

				{currentStep === 3 && (
					<LifestyleHabits
						onPrev={() => setCurrentStep(2)}
					/>
				)}

			</form>
		</div>
	)
}

export default App
