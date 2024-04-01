interface TextAreaProps {
  style: { [key: string]: any };
}

export const TextArea = (props: any) => {
  return <textarea {...props} />;
};
