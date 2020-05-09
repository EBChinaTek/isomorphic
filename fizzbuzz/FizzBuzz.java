

public class FizzBuzz {

    @Test
    void print1_100() {
        for (int i = 1; i <= 100; i++) {
            System.out.println(i);
        }
    }

    @Test
    void print1_100_fizz() {
        for (int i = 1; i <= 100; i++) {
            printFizz(i);
            System.out.println(i);
        }
    }

    @Test
    void print1_100_Fizz_Buzz() {
        for (int i = 1; i <= 100; i++) {
            printFizz(i);
            printBuzz(i);
            System.out.println(i);
        }
    }

    @Test
    void print1_100_Fizz_Buzz_02() {
        for (int i = 1; i <= 100; i++) {
            //01
//            if (printFizz(i)) ;
//            else if (printBuzz(i)) ;
//            else System.out.println(i);
            //02
//            if  (printBuzz(i) && printFizz(i)) System.out.println("FizzBuzz");
//            else if (printBuzz(i)) System.out.println("Buzz");
//            else if (printFizz(i)) System.out.println("Fizz");
//            else System.out.println(i);
            //03
            if  (printBuzz(i) && printFizz(i)) System.out.println("FizzBuzz");
            else if (printBuzz(i) || contains3(i)) System.out.println("Buzz");
            else if (printFizz(i) || contains5(i)) System.out.println("Fizz");
            else System.out.println(i);
        }
    }

    //01
//    void printFizz(int num) {
    //02
    boolean printFizz(int num) {
        //01
//        if (num == 3)
        //02
        if (num % 3 == 0) {
            //01
//            System.out.println("fizz");
            //02
            return true;
        }
        return false;
    }


    boolean printBuzz(int num) {
        //01
//        if (num == 5)
        //02
        if (num % 5 == 0){
            //01
//            System.out.println("Buzz");
            return true;
        }
        return false;
    }

    private boolean contains5(int num) {
        //个位
        int s1 = num / 10;
        //十位
        int s2 = num % 10;
        if (s1 == 5 || s2 == 5)
            return true;
        return false;
    }

    private boolean contains3(int num) {
        //个位
        int s1 = num / 10;
        //十位
        int s2 = num % 10;
        if (s1 == 3 || s2 == 3)
            return true;
        return false;
    }

    @Test
    void shoud_true_given_contains3ofnum_to_contains3() {
        assertTrue("",contains3(13));
    }

    @Test
    void shoud_false_given_uncontains3ofnum_to_contains3() {
        assertFalse("",contains3(14));
    }

}
