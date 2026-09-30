import BlurText from "@/components/BlurText";

const TestBlurText = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-8">
      <BlurText
        text="Test d'integration React Bits"
        className="text-3xl font-semibold"
        animateBy="words"
        direction="top"
      />
    </div>
  );
};

export default TestBlurText;
