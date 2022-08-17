import { defineComponent, PropType } from "vue";
import 'uno.css'
export type IColor = 'black' | 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink'
export const props = {
    color: {
        type: String as PropType<IColor>,
        default: 'yellow'
    },
    icon:{
        type:String,
        default:'search'
    }
}
export default defineComponent({

    name: "SButton",
    props,
    setup(props, { slots }) {
        return () => (
            <button class={
                `
                py-2 
                px-4 
                font-semibold 
                rounded-lg 
                shadow-md 
                text-white 
                bg-${ props.color }-500 
                hover:bg-${ props.color }-700 
                border-none 
                cursor-pointer 
                `
            }>
                { props.icon !== "" ? <i class={`i-ic-baseline-${props.icon} p-3`}></i> : ""}
                { slots.default ? slots.default() : '普通按钮' }
            </button>
        )
    }

});