/*! For license information please see SignupForm-stories.e2feb6cb.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkCollaborative_document_editing_tools=self.webpackChunkCollaborative_document_editing_tools||[]).push([[645],{"./src/app/utils/supabase/server.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>createClient});var _supabase_ssr__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@supabase/ssr/dist/module/index.js"),next_headers__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/nextjs/dist/export-mocks/headers/index.mjs");async function createClient(){const cookieStore=await(0,next_headers__WEBPACK_IMPORTED_MODULE_1__.UL)();return(0,_supabase_ssr__WEBPACK_IMPORTED_MODULE_0__.createServerClient)("https://ejpwzuhagteymntzykdu.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqcHd6dWhhZ3RleW1udHp5a2R1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0Njk5NTMsImV4cCI6MjA2MDA0NTk1M30.dBhyVRtE1NHGQmcoS5JoZESLdt9b-za-Y1-drJRcVwQ",{cookies:{getAll:()=>cookieStore.getAll(),setAll(cookiesToSet){try{cookiesToSet.forEach((({name,value,options})=>cookieStore.set(name,value,options)))}catch(e){}}}})}},"./src/app/zod/scheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{OZ:()=>signupScheme,YA:()=>passwordMatchSchema,jF:()=>loginScheme});var zod__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/zod/lib/index.mjs");const passwordSchema=zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(8,{message:"8文字以上のパスワードが必要です"}).refine((value=>/[A-Z]/.test(value)),{message:"大文字を1文字以上含める必要があります"}).refine((value=>/[0-9]/.test(value)),{message:"数字を1文字以上含める必要があります"}).refine((value=>/[^A-Za-z0-9]/.test(value)),{message:"特殊文字を1文字以上含める必要があります"}),signupScheme=zod__WEBPACK_IMPORTED_MODULE_0__.z.object({username:zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(3,{message:"3文字以上のユーザー名が必要です"}).max(30,{message:"30文字以下のユーザー名が必要です"}),email:zod__WEBPACK_IMPORTED_MODULE_0__.z.string().email({message:"メールアドレスの形式が正しくありません"}),password:passwordSchema,passwordConfirm:passwordSchema}).refine((data=>data.password===data.passwordConfirm),{message:"パスワードが一致しません",path:["passwordConfirm"]}),loginScheme=zod__WEBPACK_IMPORTED_MODULE_0__.z.object({email:zod__WEBPACK_IMPORTED_MODULE_0__.z.string().email({message:"メールアドレスの形式が正しくありません"}),password:passwordSchema}),passwordMatchSchema=zod__WEBPACK_IMPORTED_MODULE_0__.z.object({password:passwordSchema,passwordConfirm:passwordSchema}).refine((data=>data.password===data.passwordConfirm),{message:"パスワードが一致しません",path:["passwordConfirm"]})},"./src/components/ui/alert.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Fc:()=>Alert,TN:()=>AlertDescription});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),class_variance_authority__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs")),_lib_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/lib/utils.ts");const alertVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__.F)("relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",{variants:{variant:{default:"bg-card text-card-foreground",destructive:"text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"}},defaultVariants:{variant:"default"}});function Alert({className,variant,...props}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{"data-slot":"alert",role:"alert",className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(alertVariants({variant}),className),...props})}function AlertDescription({className,...props}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{"data-slot":"alert-description",className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",className),...props})}Alert.__docgenInfo={description:"",methods:[],displayName:"Alert"},AlertDescription.__docgenInfo={description:"",methods:[],displayName:"AlertDescription"}},"./src/components/ui/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs")),class_variance_authority__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),_lib_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/lib/utils.ts");const buttonVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function Button({className,variant,size,asChild=!1,...props}){const Comp=asChild?_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.DX:"button";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Comp,{"data-slot":"button",className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(buttonVariants({variant,size,className})),...props})}Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}}},"./src/components/ui/card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BT:()=>CardDescription,Wu:()=>CardContent,ZB:()=>CardTitle,Zp:()=>Card,aR:()=>CardHeader,wL:()=>CardFooter});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_lib_utils__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/lib/utils.ts"));function Card({className,...props}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{"data-slot":"card",className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",className),...props})}function CardHeader({className,...props}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{"data-slot":"card-header",className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",className),...props})}function CardTitle({className,...props}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{"data-slot":"card-title",className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("leading-none font-semibold",className),...props})}function CardDescription({className,...props}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{"data-slot":"card-description",className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("text-muted-foreground text-sm",className),...props})}function CardContent({className,...props}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{"data-slot":"card-content",className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("px-6",className),...props})}function CardFooter({className,...props}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{"data-slot":"card-footer",className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex items-center px-6 [.border-t]:pt-6",className),...props})}Card.__docgenInfo={description:"",methods:[],displayName:"Card"},CardHeader.__docgenInfo={description:"",methods:[],displayName:"CardHeader"},CardFooter.__docgenInfo={description:"",methods:[],displayName:"CardFooter"},CardTitle.__docgenInfo={description:"",methods:[],displayName:"CardTitle"},CardDescription.__docgenInfo={description:"",methods:[],displayName:"CardDescription"},CardContent.__docgenInfo={description:"",methods:[],displayName:"CardContent"}},"./src/components/ui/input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>Input});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_lib_utils__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/lib/utils.ts"));function Input({className,type,...props}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type,"data-slot":"input",className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",className),...props})}Input.__docgenInfo={description:"",methods:[],displayName:"Input"}},"./src/components/ui/label.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Label});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/@radix-ui/react-label/dist/index.mjs")),_lib_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/lib/utils.ts");function Label({className,...props}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_2__.b,{"data-slot":"label",className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",className),...props})}Label.__docgenInfo={description:"",methods:[],displayName:"Label"}},"./src/lib/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cn(...inputs){return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}},"./src/storybook/SignupForm.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SignupForm_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),card=__webpack_require__("./src/components/ui/card.tsx"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),input=__webpack_require__("./src/components/ui/input.tsx"),label=__webpack_require__("./src/components/ui/label.tsx"),ui_button=__webpack_require__("./src/components/ui/button.tsx"),ui_alert=__webpack_require__("./src/components/ui/alert.tsx"),circle_alert=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/circle-alert.js");const X=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),scheme=__webpack_require__("./src/app/zod/scheme.ts");const initialState={errors:void 0,message:void 0},Form=({formSubmit})=>{var _passwordValidationErrors_passwordConfirm;const[password,setPassword]=(0,react.useState)(""),[passwordConfirm,setPasswordConfirm]=(0,react.useState)(""),passwordValidationErrors=(0,react.useMemo)((()=>{if(password&&passwordConfirm){const matchValidation=scheme.YA.safeParse({password,passwordConfirm});if(!matchValidation.success){return matchValidation.error.flatten().fieldErrors}}return null}),[password,passwordConfirm]),[state,formAction,isPending]=(0,react.useActionState)((async(prevState,formData)=>await formSubmit(formData)),initialState);return(0,jsx_runtime.jsxs)("form",{action:formAction,className:"space-y-4",children:[state.errors&&(0,jsx_runtime.jsxs)(ui_alert.Fc,{variant:"destructive",children:[(0,jsx_runtime.jsx)(circle_alert.A,{className:"h-4 w-4"}),(0,jsx_runtime.jsxs)(ui_alert.TN,{children:[state.errors.username&&(0,jsx_runtime.jsx)("p",{children:state.errors.username}),state.errors.email&&(0,jsx_runtime.jsx)("p",{children:state.errors.email}),state.errors.password&&Array.isArray(state.errors.password)?state.errors.password.map((error=>(0,jsx_runtime.jsx)("p",{children:error},error))):state.errors.password&&(0,jsx_runtime.jsx)("p",{children:state.errors.password})]})]}),(0,jsx_runtime.jsxs)("div",{className:"space-y-2",children:[(0,jsx_runtime.jsx)(label.J,{htmlFor:"username",children:"ユーザー名"}),(0,jsx_runtime.jsx)(input.p,{id:"username",name:"username",placeholder:"johndoe",required:!0,autoComplete:"username"})]}),(0,jsx_runtime.jsxs)("div",{className:"space-y-2",children:[(0,jsx_runtime.jsx)(label.J,{htmlFor:"email",children:"メールアドレス"}),(0,jsx_runtime.jsx)(input.p,{id:"email",name:"email",type:"email",placeholder:"name@example.com",required:!0,autoComplete:"email"})]}),(0,jsx_runtime.jsxs)("div",{className:"space-y-2",children:[(0,jsx_runtime.jsx)(label.J,{htmlFor:"password",children:"パスワード"}),(0,jsx_runtime.jsx)(input.p,{id:"password",name:"password",type:"password",value:password,onChange:e=>setPassword(e.target.value),required:!0,autoComplete:"new-password"})]}),(0,jsx_runtime.jsxs)("div",{className:"space-y-2",children:[(0,jsx_runtime.jsx)(label.J,{htmlFor:"passwordConfirm",children:"パスワード（確認）"}),(0,jsx_runtime.jsx)(input.p,{id:"passwordConfirm",name:"passwordConfirm",type:"password",value:passwordConfirm,onChange:e=>setPasswordConfirm(e.target.value),required:!0,autoComplete:"new-password"}),null==passwordValidationErrors||null===(_passwordValidationErrors_passwordConfirm=passwordValidationErrors.passwordConfirm)||void 0===_passwordValidationErrors_passwordConfirm?void 0:_passwordValidationErrors_passwordConfirm.map((error=>(0,jsx_runtime.jsxs)("div",{className:"flex items-center text-sm mt-2",children:[(0,jsx_runtime.jsx)(X,{className:"h-4 w-4 mr-2 text-red-500"}),(0,jsx_runtime.jsx)("span",{className:"text-red-500",children:error})]},error)))]}),(0,jsx_runtime.jsx)(ui_button.$,{type:"submit",className:"w-full",disabled:isPending,children:isPending?"アカウント作成中...":"アカウントを作成"})]})},Form_Form=Form;Form.__docgenInfo={description:"",methods:[],displayName:"Form",props:{formSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(formData: FormData) => Promise<SignUpFormState>",signature:{arguments:[{type:{name:"FormData"},name:"formData"}],return:{name:"Promise",elements:[{name:"signature",type:"object",raw:"{\n  errors?: {\n    username?: string[];\n    email?: string[];\n    password?: string[];\n    passwordConfirm?: string[];\n  };\n  message?: string;\n}",signature:{properties:[{key:"errors",value:{name:"signature",type:"object",raw:"{\n  username?: string[];\n  email?: string[];\n  password?: string[];\n  passwordConfirm?: string[];\n}",signature:{properties:[{key:"username",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"email",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"password",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"passwordConfirm",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]},required:!1}},{key:"message",value:{name:"string",required:!1}}]}}],raw:"Promise<SignUpFormState>"}}},description:""}}};var server=__webpack_require__("./src/app/utils/supabase/server.ts"),console=__webpack_require__("./node_modules/console-browserify/index.js");const formSubmit=async formData=>{const supabase=await(0,server.U)(),username=formData.get("username"),email=formData.get("email"),password=formData.get("password"),passwordConfirm=formData.get("passwordConfirm"),validationResult=scheme.OZ.safeParse({username,email,password,passwordConfirm});if(!validationResult.success){const errors=validationResult.error.flatten().fieldErrors;return console.log(errors),{errors:{username:errors.username,email:errors.email,password:errors.password,passwordConfirm:errors.passwordConfirm}}}var _email_toString,_password_toString;const{error}=await supabase.auth.signUp({email:null!==(_email_toString=null==email?void 0:email.toString())&&void 0!==_email_toString?_email_toString:"",password:null!==(_password_toString=null==password?void 0:password.toString())&&void 0!==_password_toString?_password_toString:""});return console.log(error),error&&console.error(error),{}};function SignupForm(){return(0,jsx_runtime.jsxs)(card.Zp,{className:"w-full max-w-md mx-auto",children:[(0,jsx_runtime.jsxs)(card.aR,{children:[(0,jsx_runtime.jsx)(card.ZB,{className:"text-2xl",children:"アカウント作成"}),(0,jsx_runtime.jsx)(card.BT,{children:"新しいアカウントを作成するために詳細を入力してください"})]}),(0,jsx_runtime.jsx)(card.Wu,{children:(0,jsx_runtime.jsx)(Form_Form,{formSubmit})}),(0,jsx_runtime.jsx)(card.wL,{className:"flex justify-center",children:(0,jsx_runtime.jsxs)("p",{className:"text-sm text-muted-foreground",children:["すでにアカウントをお持ちですか？"," ",(0,jsx_runtime.jsx)(link_default(),{href:"/login",className:"text-primary hover:underline",children:"ログイン"})]})})]})}SignupForm.__docgenInfo={description:"",methods:[],displayName:"SignupForm"};const SignupForm_stories={title:"Components/SignupForm",component:SignupForm,argTypes:{}},Primary={args:{}},__namedExportsOrder=["Primary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    // You can pass initial values for props here\n  }\n}",...Primary.parameters?.docs?.source}}}}}]);