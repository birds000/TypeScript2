class Square{
    static weght:number;
    static hight:number;
    static sum:number=0;

    static SumSqure(){
        Square.sum = Square.weght * Square.hight;
        console.log("Weght : "+Square.SumSqure+" X  Hight : "+Square.hight+"  = "+Square.sum);
        
    }

}

Square.SumSqure();