// Image
import loginPage from "./assets/registration/LoginPage.png"
import RegPage from "./assets/registration/RegPage.png"
import otp from "./assets/registration/otp.png"
import twinPanal from "./assets/registration/twinPanal.png"
import resetSs from "./assets/reset/Reset.png"
import steps from "./assets/reset/steps.png"
import addDevice from "./assets/login/addDevice.jpg"
import Optations from "./assets/login/Optations.jpg"
import menu from "./assets/manu.jpg"
import offlineMenuIconUnmask from "./assets/biometric/setting_menu_unmask.jpg"
import offlineMenuIcon from "./assets/biometric/setting_menu.png"
import bioSetingMenufrom from "./assets/biometric/settingPage.jpg"
import bioSetingMenu from "./assets/biometric/settingPageFinal.jpg"

// TypeScript types
export interface StepData {
  img: string
  title: string
  content: string[]
}

export interface TemplateData {
  enData: {
    title: string
    greeting: string[]
    steps: StepData[]
    end: string
  }
  bnData: {
    title: string
    greeting: string[]
    steps: StepData[]
    end: string
  }
}

export interface StaticData {
  [key: string]: TemplateData
}

const StaticData: StaticData = {
  LoginData: {
    enData: {
      title: "Login with new Device",
      greeting: [
        "Customers can log in to SBL Digibanking with any supported device per user per device.",
      ],
      steps: [
        {
          img: loginPage,
          title: "Login",
          content: [
            "Opening the Digi banking app and clicking the Account option, you will be introduced to the Login page.",
          ],
        },
        {
          img: addDevice,
          title: "Customer Information",
          content: [
            `Enter your User ID & and  Password and press the Login Button.`,
            'You will introduced to the "Add device" menu.',
          ],
        },
        {
          img: Optations,
          title: "Validation Optations",
          content: [
            "You will be greedy with an option for email or SMS validation.",
          ],
        },
        {
          img: otp,
          title: "Validation",
          content: [
            "An OTP will be sent to your Device via your desired method.",
          ],
        },
      ],
      end: "congratulations! You have successfully login to the SBL Digibanking app.",
    },
    bnData: {
      title: "নতুন ডিভাইস দিয়ে লগইন করুন",
      greeting: [
        "গ্রাহকরা SBL ডিজিব্যাঙ্কিং-এ লগ ইন করতে পারেন যেকোন সমর্থিত ডিভাইস প্রতি ব্যবহারকারী প্রতি ডিভাইসের মাধ্যমে।",
      ],
      steps: [
        {
          img: loginPage,
          title: "লগইন",
          content: [
            "ডিজি ব্যাঙ্কিং অ্যাপ খুললে এবং অ্যাকাউন্ট বিকল্পে ক্লিক করলে, আপনাকে লগইন পৃষ্ঠায় পরিচয় করিয়ে দেওয়া হবে।",
          ],
        },
        {
          img: addDevice,
          title: "গ্রাহক তথ্য",
          content: [
            `আপনার ইউজার আইডি এবং পাসওয়ার্ড লিখুন এবং লগইন বোতাম টিপুন।`,
            `আপনি "ডিভাইস যোগ করুন" মেনুতে পরিচিত হবেন।`,
          ],
        },
        {
          img: Optations,
          title: "প্রবেশ",
          content: ["আপনি ইমেল বা এসএমএস যাচাইকরণের বিকল্পের সাথে লোভী হবেন।"],
        },
        {
          img: otp,
          title: "বৈধকরণ",
          content: [
            "আপনার ডিভাইসে একটি OTP পাঠানো হবে। অ্যান্ড্রয়েড ব্যবহারকারীদের জন্য, OTP স্বয়ংক্রিয়ভাবে বাছাই করা হবে। iOS ব্যবহারকারীদের জন্য আপনাকে OTP জমা দিতে হবে।",
          ],
        },
      ],
      end: "অভিনন্দন! আপনি সফলভাবে SBL Digibanking অ্যাপে লগইন করেছেন।",
    },
  },
  RegistrationData: {
    enData: {
      title: "Registration",
      greeting: [
        "To register Digi banking app you need a valid Account Number that is not registered to SBL Digibanking.",
        "Active Mobile Number",
      ],
      steps: [
        {
          img: loginPage,
          title: "Login",
          content: [
            "Opening the Digi banking app and clicking the Account option, you will be introduced to the Login page.",
          ],
        },
        {
          img: RegPage,
          title: "Register Button",
          content: [`Press Register Now Button`],
        },
        {
          img: twinPanal,
          title: "Entry",
          content: [
            "Enter your Valid 11 Digit Standard Bank Account no And Mobile no associated with that account.",
          ],
        },
        {
          img: otp,
          title: "Validation",
          content: [
            "An OTP will be sent to your Device. For Android users, OTP will be picked auto. For iOS users you have to submit the OTP.",
          ],
        },
      ],
      end: "Congratulations! You have successfully registered the SBL Digibanking app.",
    },
    bnData: {
      title: "নিবন্ধন",
      greeting: [
        "ডিজি ব্যাঙ্কিং অ্যাপ নিবন্ধন করতে আপনার একটি বৈধ অ্যাকাউন্ট নম্বর প্রয়োজন যা SBL ডিজিব্যাঙ্কিং-এ নিবন্ধিত নয়।",
        "সক্রিয় মোবাইল নম্বরr",
      ],
      steps: [
        {
          img: loginPage,
          title: "লগইন",
          content: [
            "ডিজি ব্যাঙ্কিং অ্যাপ খুললে এবং অ্যাকাউন্ট বিকল্পে ক্লিক করলে, আপনাকে লগইন পৃষ্ঠায় পরিচয় করিয়ে দেওয়া হবে।",
          ],
        },
        {
          img: RegPage,
          title: "রেজিস্টার বোতাম",
          content: [`এখন "রেজিস্টার বোতাম" টিপুন`],
        },
        {
          img: twinPanal,
          title: "প্রবেশ",
          content: [
            "আপনার বৈধ 11 ডিজিটের স্ট্যান্ডার্ড ব্যাঙ্ক অ্যাকাউন্ট নম্বর এবং সেই অ্যাকাউন্টের সাথে সম্পর্কিত মোবাইল নম্বর লিখুন",
          ],
        },
        {
          img: otp,
          title: "বৈধকরণ",
          content: [
            "আপনার ডিভাইসে একটি OTP পাঠানো হবে। অ্যান্ড্রয়েড ব্যবহারকারীদের জন্য, OTP স্বয়ংক্রিয়ভাবে বাছাই করা হবে। iOS ব্যবহারকারীদের জন্য আপনাকে OTP জমা দিতে হবে।",
          ],
        },
      ],
      end: "অভিনন্দন! আপনি সফলভাবে SBL Digibanking অ্যাপ নিবন্ধন করেছেন।",
    },
  },
  ResetData: {
    enData: {
      title: "Change Password",
      greeting: [
        "Customer can reset their password or know their user ID from Digibanking.",
      ],
      steps: [
        {
          img: loginPage,
          title: "Login",
          content: [
            "Opening the Digi banking app and clicking the Account option, you will be introduced to the Login page.",
          ],
        },
        {
          img: resetSs,
          title: "Forget ID or Password",
          content: [`Press "Forgot  ID or Password" Button`],
        },
        {
          img: steps,
          title: "Entry",
          content: [
            "Enter your Valid 11-digit Standard Bank Account no And Mobile number or email associated with that account.",
          ],
        },
        {
          img: otp,
          title: "Validation",
          content: [
            "An OTP will be sent to your Device via your desired method.",
          ],
        },
      ],
      end: "Congratulations! You will receive your ID and Temporary password via message or email.",
    },
    bnData: {
      title: "পাসওয়ার্ড পরিবর্তন",
      greeting: [
        "গ্রাহকরা তাদের পাসওয়ার্ড পরিবর্তন করতে পারেন বা ডিজিব্যাঙ্কিং থেকে তাদের ব্যবহারকারী আইডি জানতে পারেন।",
      ],
      steps: [
        {
          img: loginPage,
          title: "লগইন",
          content: [
            "ডিজি ব্যাঙ্কিং অ্যাপ খুললে এবং অ্যাকাউন্ট বিকল্পে ক্লিক করলে, আপনাকে লগইন পৃষ্ঠায় পরিচয় করিয়ে দেওয়া হবে।",
          ],
        },
        {
          img: resetSs,
          title: "Forgot ID or Password বোতাম",
          content: [`"Forgot ID or Password" বোতাম টিপুন`],
        },
        {
          img: steps,
          title: "প্রবেশ",
          content: [
            "আপনার বৈধ 11-সংখ্যার স্ট্যান্ডার্ড ব্যাঙ্ক অ্যাকাউন্ট নম্বর এবং সেই অ্যাকাউন্টের সাথে সম্পর্কিত মোবাইল নম্বর বা ইমেল লিখুন।",
          ],
        },
        {
          img: otp,
          title: "বৈধকরণ",
          content: [
            "আপনার পছন্দসই পদ্ধতির মাধ্যমে আপনার ডিভাইসে একটি OTP পাঠানো হবে।",
          ],
        },
      ],
      end: "অভিনন্দন! আপনি বার্তা বা ইমেলের মাধ্যমে আপনার আইডি এবং অস্থায়ী পাসওয়ার্ড পাবেন।",
    },
  },
  BiometricData: {
    enData: {
      title: "Biometric Login",
      greeting: [
        "Customer can reset their password or know their user ID from Digibanking.",
      ],
      steps: [
        {
          img: menu,
          title: "Menu",
          content: [
            `Press any option  such as "Banking", "Bill pay", "Fund Transfer"`,
          ],
        },
        {
          img: offlineMenuIconUnmask,
          title: "Example",
          content: [`You will find a navigation bar at the bottom.`],
        },
        {
          img: offlineMenuIcon,
          title: "Setting Button",
          content: [`Press "Setting" Button`],
        },
        {
          img: bioSetingMenufrom,
          title: "Setting Manu",
          content: [
            "You will introduce with Setting page.",
            `Press "Enable Biometric"`,
          ],
        },
        {
          img: bioSetingMenu,
          title: "Validation",
          content: ["Complete the process by inserting Biometric data."],
        },
      ],
      end: `Press the "Fingerprint Icon If success you will login.`,
    },
    bnData: {
      title: "বায়োমেট্রিক লগইন",
      greeting: [
        "গ্রাহকরা তাদের পাসওয়ার্ড রিসেট করতে পারেন বা ডিজিব্যাঙ্কিং থেকে তাদের ব্যবহারকারী আইডি জানতে পারেন।",
      ],
      steps: [
        {
          img: menu,
          title: "মেনু",
          content: [
            `"ব্যাংকিং", "বিল পে", "ফান্ড ট্রান্সফার" এর মতো যেকোনো বিকল্প টিপুন`,
          ],
        },
        {
          img: offlineMenuIconUnmask,
          title: "উদাহরণ",
          content: [`আপনি নীচে একটি নেভিগেশন বার পাবেন।`],
        },
        {
          img: offlineMenuIcon,
          title: "সেটিং বোতাম",
          content: [`"Setting" বোতাম টিপুন`],
        },
        {
          img: bioSetingMenufrom,
          title: "মনু সেটিং",
          content: [
            "আপনি সেটিং পৃষ্ঠার সাথে পরিচয় করিয়ে দেবেন।",
            `"Enable Biometric" টিপুন`,
          ],
        },
        {
          img: bioSetingMenu,
          title: "বৈধতা",
          content: [
            "বায়োমেট্রিক ডেটা সন্নিবেশ করে প্রক্রিয়াটি সম্পূর্ণ করুন।",
          ],
        },
      ],
      end: "আঙ্গুলের ছাপ আইকন টিপুন সফল হলে আপনি লগইন করবেন,",
    },
  },
}
export default StaticData
