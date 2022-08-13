import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Random;

public class Matriz {

    int[][] mat;

    public Matriz(int linha, int coluna) {
        this.mat = new int[linha][coluna];
    }

    public Matriz(int linha, int coluna, int rand) {

        this.mat = new int[linha][coluna];
        for (int i = 0; i < this.mat.length; i++) {
            for (int j = 0; j < this.mat.length; j++) {
                mat[i][j] = new Random().nextInt(20);
            }
        }

    }

    public void preencheMatriz() {

        for (int i = 0; i < this.mat.length; i++) {
            for (int j = 0; j < this.mat.length; j++) {
                mat[i][j] = new Random().nextInt(100);
                System.out.print("[" + mat[i][j] + "]");
            }
            System.out.println();
        }
    }

    public int value(int linha, int coluna) {
        return this.mat[linha][coluna];
    }

    public void insert(int valor, int linha, int coluna) {
        this.mat[linha][coluna] = valor;
    }

    public void mostraMatriz() {
        for (int i = 0; i < mat.length; i++) {
            for (int j = 0; j < mat.length; j++) {
                System.out.print("[" + mat[i][j] + "]");
            }
            System.out.println();
        }
    }

    public void preencheSemValorRepetido() {

        List<Integer> valores = new ArrayList<Integer>();
        int cont = 0;

        for (int i = 0; i < 99; i++) {
            valores.add(i);
        }

        Collections.shuffle(valores);

        for (int i = 0; i < this.mat.length; i++) {
            for (int j = 0; j < this.mat.length; j++) {
                cont++;
                mat[i][j] = valores.get(cont);
            }
        }

    }
}
