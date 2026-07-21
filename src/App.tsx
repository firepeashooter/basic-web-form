import UserInfo from "./FormPages/UserInfo"
import MedicalHistory from "./FormPages/MedicalHistory"
import LifestyleHabits from "./FormPages/LifestyleHabits"
import { useState } from "react"
import SuccessBanner from "./Components/SuccessBanner"
import Header from "./Components/Header"


function App() {

	//Track form page
	const [currentStep, setCurrentStep] = useState(1)
	const [isSubmitted, setIsSubmitted] = useState(false)

	// Handle submission of the form
	const handleFinalSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		console.log("Submitting Form!")
		setIsSubmitted(true)
	}

	return (
		<div className="flex flex-col justify-start items-center bg-gray-200 w-full min-h-screen px-10 pb-20">
			<Header />
			<form
				onSubmit={handleFinalSubmit}
				className="max-w-3xl w-full bg-gray-50 rounded-2xl shadow p-8 mr-10 ml-10"
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
					<div className="flex flex-col gap-5">
						<LifestyleHabits
							onPrev={() => setCurrentStep(2)}
						/>
						{isSubmitted && <SuccessBanner />}
					</div>
				)}

			</form>
		</div>
	)
}

export default App
