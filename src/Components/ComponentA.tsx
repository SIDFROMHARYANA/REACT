const ComponentA = () => {
    return (
        <div>ComponentA</div>
    )
}

 
const ComponentB = () => {
    return (
        <div>ComponentB</div>
    )
}

const ComponentC = () => {
    return (
        <div>ComponentC</div>
    )
}

 

const componentMap = {
    A: ComponentA,
    B: ComponentB,
    C: ComponentC
}

const Component = ({ component }: { component: string }) => {
    const SelectedComponent = (componentMap as any)[component];
    
    return (
        <div>
            <SelectedComponent/>
        </div>
    )
}



export default Component