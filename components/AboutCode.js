import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const AboutCode = () => {
    const aboutMe = {
        name: "Hassan Lateef",
        profession: "💻 Software Developer",
        location: "📍 Lagos, Nigeria",
        specializations: ["🖥️ Backend Development", "🌐 Full-Stack Development"],
        background: "⚙️ PHP, JavaScript, and Laravel Developer",
        hobbies: ["🚀 Building Projects", "📚 Learning New Technologies", "🎥 Watching Tech Videos"],
        message: "✨ I’m always open to new opportunities, collaborations, and leveling up my skills!"
    };
    return (_jsxs("div", { className: "px-5 pt-6 pb-14", children: [_jsx("h2", { className: "text-2xl font-semibold text-white", children: "About Me \uD83D\uDE80" }), _jsxs("p", { className: "mt-4 text-gray-300", children: ["Hello! I'm ", _jsx("span", { className: "font-bold", children: aboutMe.name }), ", a passionate", " ", _jsx("span", { className: "font-bold", children: aboutMe.profession }), " based in", " ", _jsx("span", { className: "font-bold", children: aboutMe.location }), ". ", _jsx("br", {}), " I specialize in", " ", aboutMe.specializations.map((skill, index) => (_jsxs("span", { className: "text-blue-400", children: [skill, index < aboutMe.specializations.length - 1 && ", "] }, index))), "."] }), _jsxs("p", { className: "mt-2 text-gray-300", children: ["With a background in", " ", _jsx("span", { className: "font-bold", children: aboutMe.background }), ", I'm driven to", _jsx("br", {}), "continuously learn and grow. \uD83C\uDF31"] }), _jsxs("p", { className: "mt-2 text-gray-300", children: ["When I'm not coding, you can find me ", _jsx("br", {}), " ", aboutMe.hobbies.map((hobby, index) => (_jsxs("span", { className: "italic", children: [hobby, index < aboutMe.hobbies.length - 1 && ", "] }, index))), "."] }), _jsxs("p", { className: "mt-2 text-gray-300", children: [aboutMe.message, " \uD83C\uDF1F"] })] }));
};
export default AboutCode;
