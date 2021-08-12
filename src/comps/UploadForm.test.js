import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event'
import UploadForm from './UploadForm';

test('should render with upload input', () => {
  render(<UploadForm />);

  const fileUpload = screen.getByTestId('file-upload');
  expect(fileUpload).toBeInTheDocument();
});

test('should successfully upload file', () => {
  // see: https://github.com/testing-library/react-testing-library/issues/93#issuecomment-631511472
  const file = new File(["hello"], "hello.png", { type: "image/png" })

  render(<UploadForm />);
  
  const fileUpload = screen.getByTestId('file-upload');
  user.upload(fileUpload, file)

  expect(fileUpload.files[0]).toStrictEqual(file);
  expect(fileUpload.files).toHaveLength(1);

  // should message file being uploaded with exact filename 
  const successText = screen.getByText(/You selected to upload hello.png/i);
  expect(successText).toBeInTheDocument();

  // should not have error message
  const errorText = screen.queryByText(/Please enter a png or jpeg/i);
  expect(errorText).not.toBeInTheDocument();
});

test('should show error when upoad invalid file type', () => {
  // set file with invalid type
  const file = new File(["invalid"], "invalid.pdf", { type: "application/pdf" })

  render(<UploadForm />);
  
  const fileUpload = screen.getByTestId('file-upload');
  user.upload(fileUpload, file);

  // should display error message due to invalid type
  const errorText = screen.getByText(/Please enter a png or jpeg/i);
  expect(errorText).toBeInTheDocument();

  // should message file being uploaded with exact filename 
  const successText = screen.queryByText(/You selected to upload/i);
  expect(successText).not.toBeInTheDocument();
});