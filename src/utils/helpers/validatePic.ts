export const validateFile = (fileList: File[]) => {
	const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
	const ALLOWED_EXTENSIONS = ['jpg', 'jpeg', 'png'];

	const file = fileList[0];
	if (!file) {
		return 'Please upload the picture';
	}

	// Проверка размера файла
	if (file.size > MAX_FILE_SIZE) {
		return 'File size should be less than 5MB';
	}

	console.log(file);

	// Проверка расширения файла
	const fileExtension = (file.name.split('.').pop() || '').toLowerCase();
	if (!ALLOWED_EXTENSIONS.includes(fileExtension)) {
		return 'Only JPG, JPEG, and PNG files are allowed';
	}

	return true;
};
