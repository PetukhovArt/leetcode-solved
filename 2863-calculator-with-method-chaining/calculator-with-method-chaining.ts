class Calculator {
    private val
    constructor(value: number) {
        this.val = value    
    }
    
    add(value: number): Calculator {
        this.val+=value
        return this
    }
    
    subtract(value: number): Calculator {
        this.val-=value
        return this
    }
    
    multiply(value: number): Calculator {
        this.val = value * this.val
        return this
    }
    
    divide(value: number): Calculator {
        if (value === 0) {
            throw new Error("Division by zero is not allowed") 
        }
        this.val = this.val/value
        return this
    }
    
    power(value: number): Calculator {
        this.val = Math.pow(this.val, value)
        return this
    }
    
    getResult(): number {
        return this.val
    }
}