"use client"
import { Check } from 'lucide-react';
import { useEffect, useState } from 'react';
import { PeriodRadioButtons } from './period-radio-buttons';

type SubscriptionType = 'Mes' | 'Trimestre' | 'Semestre' | 'Anual';


const includedFeatures = [
  'Acceso a cursos completos',
  'Actualizaciones periódicas y nuevos cursos',
  'Acceso exclusivo a contenido como podcasts, entrevistas, demostraciones y más',
]

const subscriptionPrices = {
    Mes: 42,
    Trimestre: 110,
    Semestre: 210,
    Anual: 390,
};

const discountedPrices = {
    Mes: 24,
    Trimestre: 75,
    Semestre: 150,
    Anual: 300,
};


export default function Pricing() {
  const [subscriptionType, setSubscriptionType] = useState<SubscriptionType>('Mes');
    
    const handleSubscriptionChange = (event: any) => {
        setSubscriptionType(event.target.value);
      };

      // THIS FIX HYDRATION ERROR
      const [isMounted,setIsMounted] = useState(false);

      useEffect(() => {
          setIsMounted(true);
      },[])
  
      if(!isMounted) {
          return null;
      }
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-16 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Conoce los beneficios de suscribirse en 3BSLab</h2>
            <p className="text-xl text-gray-400">Crea tu cuenta, elige un periodo de membresía y tendrás todo el contenido disponible en un sólo pago.</p>
          </div>

          <div className="">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-2xl rounded-3xl ring-1 ring-gray-200 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-2xl font-bold tracking-tight">Suscripción por periodos</h3>
                        <p className="mt-6 text-base leading-7">
                            Elige el periodo de suscripción que mejor se adapte a tus necesidades y disfruta de todo el contenido exclusivo que 3BSLab tiene para ofrecer.
                        </p>
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-color3bs">Obtendrás:</h4>
                            <div className="h-px flex-auto bg-gray-100" />
                        </div>
                        <ul
                            role="list"
                            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 dark:text-gray-400 sm:grid-cols-2 sm:gap-6"
                        >
                            {includedFeatures.map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <Check className="h-6 w-5 flex-none text-color3bs" aria-hidden="true" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <PeriodRadioButtons
                            subscriptionType={subscriptionType}
                            handleSubscriptionChange={handleSubscriptionChange}
                        />
                        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className="mx-auto max-w-xs px-6">
                            <p className="text-base font-semibold text-gray-600">Por solo</p>
                            <p className="mt-6 flex items-baseline justify-start gap-x-1">
                                <span className="text-2xl font-medium line-through text-gray-500">
                                ${subscriptionPrices[subscriptionType]}
                                </span>
                                <span className="text-5xl font-bold tracking-tight text-gray-900 whitespace-nowrap">
                                ${discountedPrices[subscriptionType]}
                                </span>
                                <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                                USD cada {subscriptionType === 'Anual' ? 'Año' : subscriptionType}
                                </span>
                            </p>
                            {/* Badge de descuento */}
                            <div className="mt-4 inline-block rounded-full bg-color3bs px-3 py-1 text-sm font-semibold text-white">
                                ¡Descuento de lanzamiento!
                            </div>
                            </div>
                        </div>
                        </div>

                </div>
            </div>
        </div>

        </div>
      </div>
    </section>
  )
}
