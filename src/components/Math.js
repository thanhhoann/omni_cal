import mathsteps from "mathsteps";

export default function Math({ text }) {
  function cal() {
    let res;
    let arr = [];

    if (text.includes("x")) {
      const steps = mathsteps.solveEquation(text);

      steps.forEach((step) => {
        arr.push(step.newEquation.ascii());
      });

      return arr.map((step, i) => {
        return (
          <h1 className="flex tracking-wide my-[1rem] font-light items-center">
            <p className="italic border-white border-[2px] rounded-lg mr-[1rem] p-[4px]">
              Step {i + 1}
            </p>{" "}
            {step}
          </h1>
        );
      });
    } else {
      const steps = mathsteps.simplifyExpression(text);
      steps.forEach((step) => {
        res = step.newNode.toString();
      });
      return res;
    }
  }

  return (
    <>
      <div className="text-white text-[1rem] sm:text-[2rem] opacity-[50%] ml-[1rem] mt-[0.5rem]">
        {cal()}
      </div>
    </>
  );
}
