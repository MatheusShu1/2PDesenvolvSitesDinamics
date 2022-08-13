import java.util.Random;
import java.util.Scanner;

public class Ex05 {
    public static void main(String[] args) {
        int[][] mat = new int[5][5];
        boolean flagAchou = false;

        try (Scanner input = new Scanner(System.in)) {
            System.out.println("\nInserindo valores na matriz(aleatório)\n");

            for (int i = 0; i < mat.length; i++) {
                for (int j = 0; j < mat.length; j++) {
                    mat[i][j] = new Random().nextInt(100);
                    System.out.print("[" + mat[i][j] + "]");
                }
                System.out.println();
            }

            System.out.print("Insira um valor para encontrar dentro da matriz: ");
            int num = input.nextInt();

            for (int i = 0; i < mat.length; i++) {
                for (int j = 0; j < mat.length; j++) {
                    if (mat[i][j] == num) {
                        System.out.println("Valor econtrado na posição: ["+ i +"]["+ j +"]");
                        flagAchou = true;
                        break;
                    }
                }
            }
        }

        if (flagAchou == false) {
            System.out.println("valor não econtrado");
        }
    }
}
