import { defineComponent, PropType } from "vue";
import { colors } from '../../config/unocss'
type Translate<T extends readonly string[]> = T[number]
export type IColor = Translate<typeof colors>
export const props = {
    color: {
        type: String as PropType<IColor>,
        default: 'gray'
    },
    icon:{
        type:String,
        default:''
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
                mx-1
                `
            }>
                { props.icon !== "" ? <i class={`i-ic-baseline-${props.icon} p-3`}></i> : ""}
                { slots.default ? slots.default() : '' }
            </button>
        )
    }

});