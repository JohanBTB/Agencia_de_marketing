import bocchi from "assets/img/icons/bocchi1.png"


const incentives = [
    {
      name: 'Free shipping',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
      description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
    },
    {
      name: '10-year warranty',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
      description: "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
    },
    {
      name: 'Exchanges',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
      description:
        "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
    },{
        name: 'Free shipping',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
        description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
      },
      {
        name: '10-year warranty',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
        description: "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
      },
      {
        name: 'Exchanges',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
        description:
          "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
      },{
        name: 'Free shipping',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
        description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
      },
      {
        name: '10-year warranty',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
        description: "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
      }
  ]


export default function Incentives() {
    return (
      <div className="">
        <div className="max-w-7xl grid grid-cols-3 gap-8 ml-24 pt-7 sm:px-2  lg:px-4">
              <h2 className="text-4xl col-span-1 font-bold tracking-tight text-mydarkblue-500">
                We built our business on customer service
              </h2>
              <p className="mt-4 text-3xl col-span-2 text-mylightblue-500">
                At the beginning at least, but then we realized we could make a lot more money if we kinda stopped caring
                about that. Our new strategy is to write a bunch of things that look really good in the headlines, then
                clarify in the small print but hope people don't actually read it.
              </p>
            </div>
        <div className="relative py-24 sm:px-2 sm:py-32 lg:px-4">
          <div className="flex mx-auto  px-4 lg:max-w-none">
            
            <div className="mt-16 max-w-4xl grid sm:grid-cols-2 grid-cols-1 gap-y-10 gap-x-8">
              {incentives.map((incentive) => (
                <div key={incentive.name} className="sm:flex lg:block ">
                  <div className="sm:flex-shrink-0">
                    <img className="h-16 w-16" src={incentive.imageSrc} alt="" />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                    <h3 className="sm:text-3xl text-2xl font-medium text-mydarkblue-500">{incentive.name}</h3>
                    <p className="mt-2 sm:text-xl text-lg text-mylightblue-500">{incentive.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>
        <img alt="a" className="absolute  right-0 top-[40%] min-w-[50%] max-w-[75%] z-[-1]" src={bocchi}></img>
      </div>
      
    )

}


