import java.util.Random;

public class Ex04 {
    public static void main(String[] args) {
        int[][] mat = new int[4][4];
        int maior = 0;

        System.out.println("\nInserindo valores na matriz(aleatório)\n");

        for (int i = 0; i < mat.length; i++) {
            for (int j = 0; j < mat.length; j++) {
                mat[i][j] = new Random().nextInt(100);
                System.out.print("[" + mat[i][j] + "]");
                if (mat[i][j] > maior) {
                    maior = mat[i][j];
                }
            }
            System.out.println();
        }

        System.out.println("\nMaior valor da matriz: " + maior);
    }
}
