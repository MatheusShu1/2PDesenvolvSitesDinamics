public class Ex03 {
    public static void main(String[] args) {
        Matriz mat = new Matriz(4, 4);

        for (int i = 0; i < 4; i++) {
            for (int j = 0; j < 4; j++) {
                mat.insert((i * j), i, j);
            }
        }

        mat.mostraMatriz();
    }

}
