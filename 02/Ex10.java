public class Ex10 {
    public static void main(String[] args) {
        Matriz mat = new Matriz(6, 6, 20);

        System.out.println("Matriz antes");
        mat.mostraMatriz();

        for (int i = 0; i < 6; i++) {
            for (int j = 0; j < 6; j++) {
                if ((i > j)) {
                    mat.insert(0, i, j);
                }
            }
        }

        System.out.println("Matriz antes");
        mat.mostraMatriz();
    }
}
