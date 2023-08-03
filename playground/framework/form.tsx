/* @jsx createElement*/
import {createElement, createRoot} from "@framework";
import {atom, reactive} from "rata";
import {EREditor} from "./component/entity/EREditor";
import {Entity, Property, PropertyTypes, Relation} from "./component/entity/Entity";
import "./index.css"
import {createClass, createInstancesFromString, stringifyAllInstances} from "./component/createClass";
import {Checkbox} from "./component/form/Checkbox";
import {Select} from "./component/form/Select";
import {Input} from "./component/form/Input";



const root = createRoot(document.getElementById('root')!)

const inputValue = atom('')
const checkboxValue = atom(true)
const selectValue = atom(null)

const Item = createClass({
    name: 'Option',
    display: (obj) => obj.name,
    public: {
       name: {
           type: 'string',
           required: true
       },
        value: {
           type: 'number',
            required: true
        }
    }
})

const options = reactive([
    Item.createReactive({ name: 't1', value:1}),
    Item.createReactive({ name: 't2', value:2}),
    Item.createReactive({ name: 't3', value:3}),
])


root.render(<div className="">
    <div>
        <Input value={inputValue} placeholder="input string value"/>
        <div>
            <span>input value:</span>
            <span>{inputValue}</span>
        </div>
    </div>

    <div>
        <Checkbox value={checkboxValue} label={'checkbox value'} />
        <div>
            <span>checkbox value:</span>
            <span>{checkboxValue}</span>
        </div>
    </div>

    <div>
        <Select options={options} allowEmpty={atom(true)} value={selectValue} display={Item.display} placeholder="select value"/>
        <div>
            <span>select value:</span>
            <span>{() => selectValue()?.value ?? ''}</span>
        </div>
    </div>


</div>)

