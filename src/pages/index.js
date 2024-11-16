import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from "next/image";
import { InputText } from "primereact/inputtext";
import { Password } from 'primereact/password';
import { Checkbox } from "primereact/checkbox";
import { useTheme } from "next-themes";


export default function Index() {

  const [value, setValue] = useState('');
  const [checked, setChecked] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;  

  return (
    <>
      <Head>
        <title>Claremont Graduate University</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div className='flex items-center justify-between py-[16px] xl:py-[1.25vw] px-[25px] xl:px-[2.09vw] fixed top-0 left-0 right-0 bg-[#FCF5F6] dark:bg-[#13161B]'>
          <div>
           
            {currentTheme === 'dark' ? 
                    <div>  <Image
                    src="/assets/images/left-menu-icons/logo_dark.png"
                    width="280"
                    height="23"
                    // className=" w-[280px] xl:w-[14.63vw]"
                    alt=""
                  /></div>
                    :
                    <div>     <Image
                    src="/assets/images/logo.svg"
                    width="280"
                    height="23"
                    // className=" w-[280px] xl:w-[14.63vw]"
                    alt=""
                  /></div>
                    }
          </div>
          <div className='flex text-[14px] xl:text-[0.730vw] font-semibold px-[12px] xl:px-[0.625vw] py-[10px] xl:py-[0.525vw] rounded-[8px] xl:rounded-[0.417vw] cursor-pointer text-[#FFFFFF] bg-[#AF1E27] hover:bg-[#911820]'>
          <i className='mr-[8px] xl:mr-[0.417vw]'><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.63627 15.4043L3.63456 15.4027C3.33037 15.1161 3.16216 14.6624 3.22181 14.1312C3.22183 14.1311 3.22184 14.131 3.22185 14.1309L3.53006 11.432C3.53007 11.4319 3.53007 11.4319 3.53008 11.4318C3.53008 11.4318 3.53009 11.4317 3.53009 11.4317C3.55171 11.2437 3.62401 11.0003 3.7368 10.7574C3.84998 10.5138 3.98758 10.3057 4.11592 10.1744L4.11597 10.1745L4.12177 10.1683L10.9634 2.92667L10.9634 2.92665C11.7634 2.07985 12.5192 1.70932 13.2266 1.68934C13.934 1.66937 14.7097 1.9967 15.5566 2.79675C16.4034 3.59673 16.774 4.35255 16.7939 5.05991C16.8139 5.76731 16.4866 6.54305 15.6865 7.38993L8.84487 14.6316L8.84487 14.6316L8.84279 14.6338C8.56757 14.9287 8.01737 15.2246 7.6191 15.2899L7.6191 15.2899L7.6158 15.2904L4.95911 15.7442C4.89203 15.7485 4.8422 15.7529 4.79963 15.7566C4.73363 15.7624 4.68506 15.7666 4.61666 15.7666C4.22081 15.7666 3.87413 15.6306 3.63627 15.4043ZM11.1448 3.08165L11.1447 3.0818L4.30459 10.3301C4.3043 10.3304 4.30401 10.3307 4.30372 10.331C4.16612 10.4759 4.04962 10.6797 3.96773 10.8552C3.88476 11.033 3.80602 11.249 3.77968 11.44L3.77954 11.44L3.77822 11.4516L3.47029 14.1481C3.47021 14.1488 3.47014 14.1494 3.47006 14.15C3.42444 14.53 3.50844 14.9318 3.80668 15.2135C4.10741 15.4975 4.50993 15.5496 4.87489 15.4943L4.8749 15.4944L4.88417 15.4928L7.56751 15.0345L7.56828 15.0344C7.76552 15.0004 7.98057 14.9078 8.15248 14.8153C8.32469 14.7227 8.51835 14.5953 8.65373 14.4531L8.6551 14.4517L15.4968 7.21L15.4977 7.20896C16.0294 6.64306 16.49 6.00284 16.5355 5.24887C16.5827 4.4681 16.1808 3.72571 15.3778 2.97091C14.6664 2.28676 13.9739 1.92496 13.275 1.92496C12.4134 1.92496 11.7283 2.46383 11.1448 3.08165Z" fill="white" stroke="white"/>
              <path d="M14.476 8.38097L14.4764 8.38101C14.5368 8.3869 14.5883 8.44265 14.5862 8.5098C14.5732 8.57543 14.5113 8.62504 14.45 8.62504H14.4499H14.4498H14.4497H14.4496H14.4495H14.4494H14.4493H14.4492H14.4491H14.449H14.4489H14.4488H14.4487H14.4486H14.4485H14.4484H14.4483H14.4482H14.4481H14.448H14.4479H14.4478H14.4477H14.4476H14.4475H14.4474H14.4473H14.4471H14.447H14.4469H14.4468H14.4467H14.4466H14.4465H14.4464H14.4463H14.4462H14.4461H14.446H14.4459H14.4458H14.4457H14.4456H14.4455H14.4454H14.4453H14.4452H14.4451H14.445H14.4449H14.4447H14.4446H14.4445H14.4444H14.4443H14.4442H14.4441H14.444H14.4439H14.4438H14.4437H14.4436H14.4435H14.4433H14.4432H14.4431H14.443H14.4429H14.4428H14.4427H14.4426H14.4425H14.4424H14.4423H14.4421H14.442H14.4419H14.4418H14.4417H14.4416H14.4415H14.4414H14.4413H14.4412H14.441H14.4409H14.4408H14.4407H14.4406H14.4405H14.4404H14.4403H14.4401H14.44H14.4399H14.4398H14.4397H14.4396H14.4395H14.4394H14.4392H14.4391H14.439H14.4389H14.4388H14.4387H14.4386H14.4385H14.4383H14.4382H14.4381H14.438H14.4379H14.4378H14.4377H14.4375H14.4374H14.4373H14.4372H14.4371H14.437H14.4368H14.4367H14.4366H14.4365H14.4364H14.4363H14.4362H14.436H14.4359H14.4358H14.4357H14.4356H14.4355H14.4353H14.4352H14.4351H14.435H14.4349H14.4348H14.4346H14.4345H14.4344H14.4343H14.4342H14.4341H14.4339H14.4338H14.4337H14.4336H14.4335H14.4333H14.4332H14.4331H14.433H14.4329H14.4328H14.4326H14.4325H14.4324H14.4323H14.4322H14.432H14.4319H14.4318H14.4317H14.4316H14.4314H14.4313H14.4312H14.4311H14.431H14.4309H14.4307H14.4306H14.4305H14.4304H14.4303H14.4301H14.43H14.4299H14.4298H14.4297H14.4295H14.4294H14.4293H14.4292H14.4291H14.4289H14.4288H14.4287H14.4286H14.4284H14.4283H14.4282H14.4281H14.428H14.4278H14.4277H14.4276H14.4275H14.4274H14.4272H14.4271H14.427H14.4269H14.4268H14.4266H14.4265H14.4264H14.4263H14.4262H14.426H14.4259H14.4258H14.4257H14.4255H14.4254H14.4253H14.4252H14.4251H14.4249H14.4248H14.4247H14.4246H14.4244H14.4243H14.4242H14.4241H14.424H14.4238H14.4237H14.4236H14.4235H14.4234H14.4232H14.4231H14.423H14.4229H14.4227H14.4226H14.4225H14.4224H14.4223H14.4221H14.422H14.4219H14.4218H14.4216H14.4215H14.4214H14.4213H14.4212H14.421H14.4209H14.4208H14.4207H14.4205H14.4204H14.4203H14.4202H14.4201H14.4199H14.4198H14.4197H14.4196H14.4194H14.4193H14.4192H14.4191H14.419H14.4188H14.4187H14.4186H14.4185H14.4183H14.4182H14.4181H14.418H14.4179H14.4177H14.4176H14.4175H14.4174H14.4173H14.4171H14.417H14.417C12.0554 8.37952 10.1593 6.58271 9.7945 4.23465C9.78549 4.16835 9.8287 4.10149 9.90305 4.08573C9.96906 4.07904 10.0345 4.12365 10.0484 4.19877C10.4019 6.43709 12.2163 8.1587 14.476 8.38097Z" fill="white" stroke="white"/>
              <path d="M17.5 18.9583H2.5C2.15833 18.9583 1.875 18.6749 1.875 18.3333C1.875 17.9916 2.15833 17.7083 2.5 17.7083H17.5C17.8417 17.7083 18.125 17.9916 18.125 18.3333C18.125 18.6749 17.8417 18.9583 17.5 18.9583Z" fill="white"/>
            </svg></i>
            Contact Us
          </div>
        </div>
        <div className="flex-row grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-0">
          <div className="">
            <div className=" login-wrap-bg h-screen">
            </div>
          </div>
          <div className="flex flex-wrap flex-row justify-center items-center auto-rows-max py-3 ">
            <div className=" max-w-md 2xl:max-w-lg w-full p-2">
                  <form autoComplete="off">
                    <div className="mb-[26px] xl:mb-[1.354vw] text-center">
                      <h2 className="text-[24px] xl:text-[1.875vw] font-semibold text-[#262626] dark:text-[#fff]">Login</h2>
                      <div className="text-[#424242] text-[18px] xl:text-[0.938vw] pt-1 tracking-[-0.36px] dark:text-[#f2f2f2]">Provide your credentials to proceed, please.</div>
                    </div>

                    <div className="relative  mb-2 xl:mb-[0.781vw] loginInput">
                      <div className="pb-2 "><label htmlFor="" className="text-[#262626] font-medium dark:text-[#fff]">Email</label></div>
                      <InputText 
                        id="" 
                        className="w-full placeholder:text-[#667085] placeholder:text-sm" 
                        placeholder="olivia@mail.com" 
                      />
                    </div>

                    <div className="relative mb-2 xl:mb-[0.781vw] custPassword loginInput">
                      <div className="py-2"><label htmlFor="username" className="text-[#262626] text-sm font-medium">Password</label></div>
                      <Password 
                        value={value} 
                        onChange={(e) => setValue(e.target.value)} 
                        toggleMask 
                        placeholder="***********" 
                        className="w-full placeholder:text-[#667085] placeholder:text-sm" 
                      />
                    </div>

                    <div className="mt-[20px] xl:mt-[1.354vw] flex items-center justify-between loginInput">
                      <div className="flex items-center">
                        <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
                        <label htmlFor="ingredient1" className="ml-2 text-[#424242] text-[14px] font-medium  dark:text-[#f2f2f2]">Remember me</label>
                      </div>
                      <div>
                        <Link href="" className="text-[#4E456D] font-medium text-[12px] hover:underline dark:text-[#f2f2f2]" >Forgot password?</Link>
                      </div>
                    </div>

                    <div className="flex w-full mt-[20px] xl:mt-[1.354vw] mb-[16px] xl:mb-[0.833vw]">
                      <Link href={'/csjpod'} className="text-[#FFFFFF] text-[16px] xl:text-[0.833vw] bg-[#AF1E27] hover:bg-[#911820] rounded-lg w-full text-center py-[10px] xl:py-[0.525vw] px-[15px] xl:px-[1.04vw]">Login</Link>
                    </div>

                    <div className='flex items-center justify-center text-[#888] text-[14px] xl:text-[0.730vw] font-normal text-center mb-[16px] xl:mb-[0.833vw]'><div className='border-[1px] w-[120px] xl:w-[6.250vw] border-[#EAE0E0]'></div>&nbsp; Or Sign in with Google &nbsp;<div className='border-[1px] w-[120px] xl:w-[6.250vw] border-[#EAE0E0]'></div></div>

                    <div className="flex w-full mb-[40px] xl:mb-[2.083vw]">
                      <Link href={'/'} className="flex items-center justify-center gap-2 text-[#424242] bg-[#FFFFFF] border-[1px] border-[#E6E3D9] text-[16px] xl:text-[0.833vw] rounded-lg w-full text-center py-[12px] xl:py-[0.625vw] dark:border-[#424242] dark:bg-[#13161B] dark:text-[#F5747C]">
                      <Image
                          src="/assets/images/Google_icon.png"
                          width="24"
                          height="24"
                          className=""
                          alt=""
                        /> 
                        Sign in with Google</Link>
                    </div>

                    <div className="flex items-center justify-center mb-8 xl:mb-[2.083vw] text-[16px] xl:text-[0.833vw] text-[#888]">
                      Not Registered Yet?
                      <Link href='/' className="ml-2 font-medium text-[#262626] hover:text-[#2B407D] dark:text-[#fff]">
                        Create account.
                      </Link>
                    </div>

                  </form>
            </div>
          </div>          
        </div>
      </div>
    </>

  );
}