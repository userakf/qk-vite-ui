import { defineComponent } from "vue";

export default defineComponent({

    name: "JSXButton",
    render() {
        return <button class={
            `
            py-2 
            px-4 
            font-semibold 
            rounded-lg 
            shadow-md 
            text-white 
            bg-yellow-500 
            hover:bg-yellow-700 
            border-none 
            cursor-pointer 
            `
        }>
        <i class={`i-ic-baseline-search p-3`}></i>
            JSX Button</button>;
    },

});