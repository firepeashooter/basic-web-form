import TextInput from "../Components/TextInput"

interface UserInfoProps {
	onNext: () => void;
}

function UserInfo({ onNext }: UserInfoProps) {

	return (
		<div className="flex flex-col justify-center gap-5">

			<h1 className="text-xl font-bold">User Information</h1>

			<div className="flex flex-col gap-3 md:grid md:grid-cols-2 md:grid-rows-2">

				<TextInput id="firstname" label="First Name" required />
				<TextInput id="lastname" label="Last Name" required />
				<TextInput id="email" label="Email" required />
				<TextInput id="phone" label="Phone Number" />
			</div>

			<div className="flex justify-end">
				<button
					type="button"
					className="rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-500 active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-50 disabled:pointer-events-none"
					onClick={onNext}
				>
					Next
				</button>
			</div>



		</div>
	)
}

export default UserInfo
