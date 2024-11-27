export default function Career() {
  return (
    <div className="bg-[rgba(19, 21, 23, 1)] p-10">
      {/* Main content area with flex on larger screens and stacked on smaller */}
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-[600px] w-full">
          <p className="text-blue-600">—Crypto Brains</p>
          <p className="text-white text-3xl lg:text-5xl font-semibold">
            Refer Friends and Earn Rewards Every Referral.
          </p>
          <p className="text-gray-400 text-xs mt-5 font-mono">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <button className="text-white p-3 bg-blue-500 w-[200px] mt-8 mb-5 text-center">Start Earning Now</button>
        </div>
        <div>
          <img className="w-[70%] mx-auto lg:w-full" src="/src/pages/Career/careerImg/working_1 1.png" alt=""/>
        </div>
      </div>

      {/* Steps section */}
      <div className="mt-[100px]">
        <p className="text-white text-3xl lg:text-4xl font-semibold text-center">How Start Earning</p>
        <div className="flex flex-col lg:flex-row h-[80px] justify-center items-center mt-11 bg-[rgba(30, 31, 37, 1)]">
          <p className="text-white font-serif text-xl mb-4 lg:mb-0">Refer a Friend</p>
          <p className="text-gray-300 font-serif text-xl mb-4 lg:mb-0">Friend Do Trading</p>
          <p className="text-gray-300 font-serif text-xl">Earn Rewards</p>
        </div>
        
        {/* Step Details Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between mt-10">
          <div className="lg:w-[700px] w-full">
            <p className="text-white font-semibold text-2xl lg:text-3xl">Refer To Friend</p>
            <p className="text-gray-400 text-xs mt-5 font-mono">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <p className="text-gray-400 text-xs mt-5 font-mono">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
            <button className="text-white p-3 bg-blue-500 w-[200px] mt-8 mb-5 text-center">Start Earning Now</button>
          </div>
          <div>
            <img className="w-full max-w-[350px] mx-auto" src="/src/pages/Career/careerImg/Img.png" alt=""/>
          </div>
        </div>
      </div>

      {/* Final Call-to-action */}
      <div className="p-10 bg-[rgba(30, 31, 37, 1)]">
        <div className="text-center w-[80%] m-auto">
          <p className="text-white font-semibold text-3xl">Hurry Up! Start Earning Now</p>
          <p className="text-gray-400 font-mono text-xs pt-8 pb-7">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.
          </p>
          <button className="text-white p-3 bg-blue-500 w-[200px] mt-8 mb-5 text-center">Refer Now</button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="flex flex-col lg:flex-row items-start justify-between mt-10">
        <div className="w-full lg:w-[580px]">
          <div className="p-3 border border-gray-400 mb-5">
            <h1 className="font-semibold text-xl text-white">What is the difference between Defi and Metaverse?</h1>
            <p className="font-semibold text-xs text-gray-300">
              When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className="p-3 border border-gray-400 mb-5">
            <h1 className="font-semibold text-xl text-white">What should I do if Google verification fails to bind?</h1>
          </div>
          <div className="p-3 border border-gray-400 mb-5">
            <h1 className="font-semibold text-xl text-white">How to complete your KYC Verification?</h1>
          </div>
          <div className="p-3 border border-gray-400 mb-5">
            <h1 className="font-semibold text-xl text-white">What should I do if I enter the Google verification code incorrectly?</h1>
          </div>
        </div>

        {/* Second column for additional FAQs */}
        <div>
          <div className="p-3 border border-gray-400 mb-5">
            <h1 className="font-semibold text-xl text-white">What should I do if I enter the Google verification code incorrectly?</h1>
          </div>
          <div className="p-3 border border-gray-400 mb-5">
            <h1 className="font-semibold text-xl text-white">What should I do if I enter the Google verification code incorrectly?</h1>
          </div>
          <div className="p-3 border border-gray-400 mb-5">
            <h1 className="font-semibold text-xl text-white">What should I do if I enter the Google verification code incorrectly?</h1>
          </div>
          <div className="p-3 border border-gray-400 mb-5">
            <h1 className="font-semibold text-xl text-white">What should I do if I enter the Google verification code incorrectly?</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
