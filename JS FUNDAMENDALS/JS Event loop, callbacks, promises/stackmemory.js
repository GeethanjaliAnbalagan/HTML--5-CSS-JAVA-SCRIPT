function LevelTwo() {
    console.log("Inside Level Two!")
    }
    
    function LevelOne() {
    LevelTwo()
    }
    
    function main() {
    LevelOne()
    }
    
    main()
    