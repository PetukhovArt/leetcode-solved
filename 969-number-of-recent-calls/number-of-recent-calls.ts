class RecentCounter {
    private readonly interval = 3000
    private requests = [] 

    public ping(t: number): number {
        this.requests.push(t)
        this.slice(t)
        return this.count
    }

    get count () {
        return this.requests.length
    }

    private slice (t: number) {
        while (this.requests[0] < t-this.interval) {
            this.requests.shift()
        }
    }
}
