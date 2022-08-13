public class Ex06 {
    public static void main(String[] args) {

        Matriz mat1 = new Matriz(4, 4);
        Matriz mat2 = new Matriz(4, 4);
        Matriz mat3 = new Matriz(4, 4);

        System.out.println("\nMatriz 1\n");
        mat1.preencheMatriz();
        System.out.println("\nMatriz 2\n");
        mat2.preencheMatriz();

        for (int i = 0; i < 4; i++) {
            for (int j = 0; j < 4; j++) {
                if (mat1.value(i, j) > mat2.value(i, j)) {
                    mat3.insert(mat1.value(i, j), i, j);
                } else {
                    mat3.insert(mat2.value(i, j), i, j);
                }
            }
        }

        System.out.println("\nMatriz 3\n");
        mat3.mostraMatriz();

    }
}
