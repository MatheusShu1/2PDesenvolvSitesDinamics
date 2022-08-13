public class Ex02 {
    public static void main(String[] args) {
        Matriz mat = new Matriz(5, 5);

        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 5; j++) {
                if (i == j) {
                    mat.insert(1, i, j);
                }
            }
        }

        mat.mostraMatriz();
    }
}
