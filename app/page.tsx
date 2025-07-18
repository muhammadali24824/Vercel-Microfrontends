
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";

export default function Home() {
  return (
<>
<div className="flex justify-between items-center max-w-7xl mx-auto p-5">
  <div className="flex gap-2 items-center cursor-pointer">
    <img className="img-nav" width={32} height={32} src="https://vercel-microfrontends-multi-zones.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmfe-icon-dark.abca59ff.png&w=32&q=75&dpl=dpl_6vki53pFJMVuGjtjbW1u6PCXwPB9" alt="" />
    <h1 className="text-2xl font-bold text-nav">Vercel Microfrontends</h1>
  </div>
  <div className="flex ">
  <div className="flex nav gap-5 text-gray-600 font-medium  ">
    <a className="hover:text-black" href="">Home</a>
    <a className="hover:text-black" href="">Feature</a>
    <a className="hover:text-black" href="">Pricing</a>
    <a href="" className="text-blue-600">Docs</a>
  </div>
  <MenuIcon className="menu"/>
  </div>

</div>

<div className="text-center bg-blue-50 p-20">
  <h1 className="text-6xl font-bold text-home">Revolutionize Your Frontend</h1>
  <h1 className="text-xl mt-5 text-home-1 text-gray-600">Build scalable and maintainable web applications with our <br className="br"/> microfrontend architecture.</h1>
  <Button className="px-8 py-5.5 mt-5 btn-home hover:bg-gray-800 cursor-pointer">Get Started</Button>
</div>

<h1 className="text-3xl text-center font-bold mt-15 mb-15">Features</h1>
<div className="big-card">
  <div className="flex max-w-7xl m-auto justify-between card">
    <div className="card-two flex gap-7">
<div className="bg-white shadow cards w-fit pt-7 pl-10 pr-8  pb-5 rounded-lg">
  <h1 className="font-semibold">Independent Deployment</h1>
  <h1 className="text-gray-600 mt-3">Deploy each microfrontend <br /> separately for faster iterations.</h1>
</div>
<div className="bg-white shadow cards w-fit pt-7 pl-10 pr-12  pb-5 rounded-lg">
  <h1 className="font-semibold">Technology Agnostic</h1>
  <h1 className="text-gray-600 mt-3">Use different frameworks or <br /> libraries for each <br /> microfrontend.</h1>
</div>
    </div>
    <div className="card-two flex gap-7">
<div className="bg-white shadow cards w-fit pt-7 pl-10 pr-8  pb-5 rounded-lg">
  <h1 className="font-semibold">Scalable Teams</h1>
  <h1 className="text-gray-600 mt-3">Enable multiple teams to work <br /> on different parts of the <br /> application simultaneously.</h1>
</div>
<div className="bg-white shadow cards w-fit pt-7 pl-10 pr-8  pb-5 rounded-lg">
  <h1 className="font-semibold">Independent Deployment</h1>
  <h1 className="text-gray-600 mt-3">Load only the necessary parts <br /> of your application for better <br /> performance.</h1>
</div>
    </div>
  </div>
</div>

<div className="text-center bg-blue-600 p-15 mt-20">
  <h1 className="text-3xl font-bold text-white text-page">Ready to get started?</h1>
  <h1 className="text-xl mt-5 text-white text-page-1">Join the microfrontend revolution today and build better web applications.</h1>
  <Button className="px-8 py-5.5 mt-5 btn-page bg-white hover:bg-stone-200 text-black cursor-pointer">Start Free Trial</Button>
</div>

<h1 className="text-center text-end m-8 text-gray-600">© 2025 Vercel Microfrontends All rights reserved.</h1>
</>
  );
}
