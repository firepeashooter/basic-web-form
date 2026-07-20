interface TextInputProps {
	id: string;
	label: string;
	type?: 'text' | 'email' | 'password' | 'number';
	placeholder?: string;
	required?: boolean;
}

function TextInput({ id, label, type, placeholder, required }: TextInputProps) {

	return (
		<div className="flex flex-col gap-1.5 w-full">
			{/* Label linked explicitly via htmlFor for accessibility and automation testing */}
			<label
				htmlFor={id}
				className="text-md font-semibold text-gray-700"
			>
				{label} {required && <span className="text-red-500">*</span>}
			</label>

			<input
				id={id}
				type={type}
				placeholder={placeholder}
				required={required}
				className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none transition-all placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
			/>
		</div>

	)
}

export default TextInput
